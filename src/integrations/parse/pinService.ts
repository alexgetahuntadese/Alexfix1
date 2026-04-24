import Parse from '@/integrations/parse/parseConfig';

// Parse class name for PINs
const PIN_CLASS = 'PIN';

export interface PINData {
  objectId?: string;
  pin_code: string;
  subject?: string;
  grade?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const pinService = {
  /**
   * Fetch a PIN by its value
   */
  async fetchPIN(pinValue: string): Promise<PINData | null> {
    try {
      const query = new Parse.Query(PIN_CLASS);
      query.equalTo('pin_code', pinValue);
      
      const pinObject = await query.first();
      
      if (!pinObject) {
        console.log(`PIN ${pinValue} not found with field 'pin_code', trying 'pin' field...`);
        // Try alternative field name
        const queryAlt = new Parse.Query(PIN_CLASS);
        queryAlt.equalTo('pin', pinValue);
        const pinObjectAlt = await queryAlt.first();
        
        if (!pinObjectAlt) {
          console.log(`PIN ${pinValue} not found in database`);
          return null;
        }
        
        console.log(`PIN ${pinValue} found with 'pin' field`);
        return {
          objectId: pinObjectAlt.id,
          pin_code: pinObjectAlt.get('pin') || pinObjectAlt.get('pin_code'),
          subject: pinObjectAlt.get('subject') || undefined,
          grade: pinObjectAlt.get('grade') || undefined,
          isActive: pinObjectAlt.get('isActive') !== false,
          createdAt: pinObjectAlt.createdAt?.toISOString(),
          updatedAt: pinObjectAlt.updatedAt?.toISOString(),
        };
      }
      
      console.log(`PIN ${pinValue} found with 'pin_code' field`);
      return {
        objectId: pinObject.id,
        pin_code: pinObject.get('pin_code'),
        subject: pinObject.get('subject') || undefined,
        grade: pinObject.get('grade') || undefined,
        isActive: pinObject.get('isActive') !== false,
        createdAt: pinObject.createdAt?.toISOString(),
        updatedAt: pinObject.updatedAt?.toISOString(),
      };
    } catch (error) {
      console.error('Error fetching PIN:', error);
      throw new Error('Failed to fetch PIN from database');
    }
  },

  /**
   * Validate a PIN against the database
   */
  async validatePIN(pinValue: string, subject?: string, grade?: string): Promise<{ valid: boolean; pinData?: PINData }> {
    try {
      const pinData = await this.fetchPIN(pinValue);
      
      if (!pinData) {
        return { valid: false };
      }
      
      // Check if PIN is active
      if (!pinData.isActive) {
        return { valid: false };
      }
      
      // Optional: Check if PIN matches subject/grade if provided
      if (subject && pinData.subject && pinData.subject !== subject) {
        return { valid: false };
      }
      
      if (grade && pinData.grade && pinData.grade !== grade) {
        return { valid: false };
      }
      
      return { valid: true, pinData };
    } catch (error) {
      console.error('Error validating PIN:', error);
      throw new Error('Failed to validate PIN');
    }
  },

  /**
   * Fetch all active PINs (admin function)
   */
  async fetchAllPINs(): Promise<PINData[]> {
    try {
      const query = new Parse.Query(PIN_CLASS);
      query.equalTo('isActive', true);
      query.ascending('createdAt');
      
      const results = await query.find();
      
      return results.map((pinObject) => ({
        objectId: pinObject.id,
        pin_code: pinObject.get('pin_code') || pinObject.get('pin'),
        subject: pinObject.get('subject') || undefined,
        grade: pinObject.get('grade') || undefined,
        isActive: pinObject.get('isActive') !== false,
        createdAt: pinObject.createdAt?.toISOString(),
        updatedAt: pinObject.updatedAt?.toISOString(),
      }));
    } catch (error) {
      console.error('Error fetching all PINs:', error);
      throw new Error('Failed to fetch PINs from database');
    }
  },

  /**
   * Create a new PIN (admin function)
   */
  async createPIN(pinData: Omit<PINData, 'objectId' | 'createdAt' | 'updatedAt'>): Promise<PINData> {
    try {
      const PINClass = Parse.Object.extend(PIN_CLASS);
      const pinObject = new PINClass();
      
      pinObject.set('pin_code', pinData.pin_code);
      pinObject.set('isActive', pinData.isActive);
      
      if (pinData.subject) {
        pinObject.set('subject', pinData.subject);
      }
      
      if (pinData.grade) {
        pinObject.set('grade', pinData.grade);
      }
      
      const savedPin = await pinObject.save();
      
      return {
        objectId: savedPin.id,
        pin_code: savedPin.get('pin_code'),
        subject: savedPin.get('subject') || undefined,
        grade: savedPin.get('grade') || undefined,
        isActive: savedPin.get('isActive') !== false,
        createdAt: savedPin.createdAt?.toISOString(),
        updatedAt: savedPin.updatedAt?.toISOString(),
      };
    } catch (error) {
      console.error('Error creating PIN:', error);
      throw new Error('Failed to create PIN');
    }
  },

  /**
   * Deactivate a PIN (admin function)
   */
  async deactivatePIN(objectId: string): Promise<void> {
    try {
      const query = new Parse.Query(PIN_CLASS);
      const pinObject = await query.get(objectId);
      
      pinObject.set('isActive', false);
      await pinObject.save();
    } catch (error) {
      console.error('Error deactivating PIN:', error);
      throw new Error('Failed to deactivate PIN');
    }
  },
};

export default pinService;
