import Parse from '../src/integrations/parse/parseConfig';
import { pinService } from '../src/integrations/parse/pinService';

async function addPIN() {
  try {
    console.log('Adding PIN 9201 to Back4App...');
    
    const newPIN = await pinService.createPIN({
      pin_code: '9201',
      isActive: true,
    });
    
    console.log('✅ PIN added successfully:', newPIN);
  } catch (error) {
    console.error('❌ Error adding PIN:', error);
    process.exit(1);
  }
}

addPIN();
