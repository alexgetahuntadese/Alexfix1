import Parse from '../src/integrations/parse/parseConfig';
import { pinService } from '../src/integrations/parse/pinService';

async function readPINs() {
  try {
    console.log('Fetching all PINs from Back4App...');
    
    const pins = await pinService.fetchAllPINs();
    
    console.log(`✅ Found ${pins.length} active PINs:`);
    pins.forEach((pin, index) => {
      console.log(`\n${index + 1}. PIN: ${pin.pin_code}`);
      console.log(`   Subject: ${pin.subject || 'N/A'}`);
      console.log(`   Grade: ${pin.grade || 'N/A'}`);
      console.log(`   Active: ${pin.isActive}`);
      console.log(`   Created: ${pin.createdAt}`);
      console.log(`   Object ID: ${pin.objectId}`);
    });
  } catch (error) {
    console.error('❌ Error reading PINs:', error);
    process.exit(1);
  }
}

readPINs();
