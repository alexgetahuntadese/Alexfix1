import Parse from '../src/integrations/parse/parseConfig';
import { pinService } from '../src/integrations/parse/pinService';

async function testPIN() {
  try {
    console.log('Testing PIN 1216...');
    console.log('Parse initialized:', !!Parse);
    console.log('App ID:', import.meta.env.VITE_BACK4APP_APP_ID);
    
    // Try to fetch the specific PIN
    console.log('\nFetching PIN 1216...');
    const pinData = await pinService.fetchPIN('1216');
    
    if (pinData) {
      console.log('✅ PIN found:', pinData);
    } else {
      console.log('❌ PIN 1216 not found in database');
    }
    
    // Try validation
    console.log('\nValidating PIN 1216...');
    const validation = await pinService.validatePIN('1216');
    console.log('Validation result:', validation);
    
    // List all PINs
    console.log('\nFetching all PINs...');
    const allPINs = await pinService.fetchAllPINs();
    console.log(`Found ${allPINs.length} PINs:`);
    allPINs.forEach(pin => {
      console.log(`- ${pin.pin_code} (active: ${pin.isActive})`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

testPIN();
