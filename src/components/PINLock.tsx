import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock, X, Shield, Sparkles, Loader2 } from 'lucide-react';
import { pinService } from '@/integrations/parse/pinService';

interface PINLockProps {
  onUnlock: (pin: string) => void;
  onCancel?: () => void;
  subjectName?: string;
  isSocialStream?: boolean;
  error?: boolean;
}

// Generate a device fingerprint using browser characteristics
const generateDeviceFingerprint = (): string => {
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    deviceMemory: (navigator as any).deviceMemory || 0,
  };
  
  // Create a hash from the fingerprint data
  const str = JSON.stringify(fingerprint);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

// Storage keys for device binding
const PIN_DEVICE_KEY = 'pin_device_binding';

const PINLock = ({ onUnlock, onCancel, subjectName, isSocialStream = false, error: externalError }: PINLockProps) => {
  const [pin, setPin] = useState('');
  const [internalError, setInternalError] = useState(false);
  const error = externalError || internalError;
  const [deviceMismatch, setDeviceMismatch] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    // Clear device mismatch error when PIN changes
    if (pin.length === 0) {
      setDeviceMismatch(false);
    }
  }, [pin]);

  const theme = {
    primary: isSocialStream ? 'purple' : 'emerald',
    secondary: isSocialStream ? 'pink' : 'teal',
    gradient: isSocialStream 
      ? 'from-purple-500 via-pink-500 to-purple-600' 
      : 'from-emerald-500 via-teal-500 to-emerald-600',
    gradientHover: isSocialStream 
      ? 'from-purple-600 via-pink-600 to-purple-700' 
      : 'from-emerald-600 via-teal-600 to-emerald-700',
    bgTint: isSocialStream ? 'purple' : 'emerald',
    borderTint: isSocialStream ? 'purple' : 'emerald',
    iconColor: isSocialStream ? 'text-purple-400' : 'text-emerald-400',
    glowColor: isSocialStream ? 'shadow-purple-500/50' : 'shadow-emerald-500/50',
  };

  const handleDigitClick = async (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      
      if (newPin.length === 4) {
        // Auto-submit when 4 digits are entered
        setIsValidating(true);
        
        try {
          // Only accept specific PINs
          const validPINs = new Set([
            '8602', '8521', '9879', '7308', '2063', '8955', '5422', '8420', '7426', '5454',
            '2336', '8590', '7906', '6404', '3495', '2695', '7330', '7445', '2756', '4781',
            '1825', '5781', '8910', '2889', '3862', '3562', '8796', '2929', '4990', '4822',
            '2681', '2057', '1231', '3559', '5752', '4023', '7283', '8427', '1349', '8203',
            '7996', '4830', '7657', '9835', '1296', '1821', '5953', '3152', '2520', '8514',
            '9201', '4030', '7944', '5472', '8143', '6866', '5276', '2291', '2160', '1831',
            '5801', '9772', '4272', '5163', '9802', '2358', '5960', '8167', '9646', '7456',
            '7129', '7837', '5828', '7389', '6041', '6775', '6910', '6378', '9297', '1146',
            '7514', '8737', '2326', '5343', '1721', '5576', '8032', '9771', '7416', '8106',
            '8989', '3585', '7205', '7228', '9427', '5711', '7452', '7917', '8839', '2835',
            '3373', '4992', '5455', '7019', '6422', '3088', '7635', '5616', '7674', '2260',
            '5147', '4819', '1293', '8372', '9964', '3299', '9084', '5770', '3676', '6966',
            '4548', '1176', '7076', '1778', '9697', '9266', '4324', '1731', '6688', '5254',
            '1279', '7718', '6066', '9226', '4874', '9222', '2651', '3809', '3189', '8164',
            '9938', '2002', '1917', '9896', '9698', '9228', '2415', '4295', '9664', '4796',
            '3571', '9393', '9408', '6019', '4378', '4524', '2842', '2584', '6826', '1708',
            '4433', '1172', '6165', '4567', '9090', '7880', '8020', '4267', '4069', '8105',
            '3720', '7684', '6483', '3300', '2173', '5372', '9154', '5485', '5334', '3470',
            '9913', '8771', '8850', '4226', '2170', '9371', '7413', '7254', '3141', '7811',
            '2813', '6542', '1754', '3192', '7284', '6124', '3842', '7987', '4800', '1800',
            '4604', '8512', '5388', '3700', '8245', '6111', '8635', '3616', '7866', '2435',
            '7934', '4044', '5751', '6174', '1803', '4237', '9544', '7982', '2119', '5432',
            '8973', '4004', '7796', '3281', '3320', '1163', '8368', '6970', '2946', '7872',
            '9954', '3018', '5734', '1719', '5187', '1348', '6981', '6140', '2107', '1250',
            '4265', '5877', '8019', '5404', '5777', '1876', '3427', '6541', '6661', '8801',
            '8615', '1284', '6768', '8937', '8091', '6163', '4752', '9666', '4463', '7973',
            '8438', '1133', '2123', '3389', '2628', '2640', '1587', '4127', '5223', '9623',
            '1062', '9538', '6957', '5740', '4107', '5337', '6780', '5427', '3528', '1481',
            '1707', '9286', '8644', '1352', '4963', '2167', '8144', '6662', '7604', '9388',
            '6424', '6716', '5647', '8689', '5923', '1136', '6347', '9180', '3796', '2960',
            '4813', '1723', '4029', '1798', '3207', '1871', '1433', '5344', '8642', '5305',
            '3806', '8128', '5614', '8058', '2578', '9687', '3137', '5141', '3591', '1120',
            '8308', '2521', '2966', '7443', '4279', '4236', '4584', '1562', '1200', '9246',
            '3007', '3844', '4904', '1257', '7817', '1174', '5015', '6248', '4434', '1401',
            '9660', '9437', '5693', '2638', '3555', '3945', '1477', '9590', '3024', '4269',
            '7545', '2693', '3578', '4750', '9029', '8084', '4844', '9520', '3795', '3296',
            '9863', '8254', '6544', '5807', '7873', '6791', '8715', '1292', '8090', '7248',
            '7577', '4670', '9202', '1836', '4092', '8056', '8666', '2155', '4674', '4477',
            '9739', '4260', '1905', '1444', '5982', '1595', '7799', '5049', '1972', '3348',
            '4461', '4769', '6983', '3512', '4918', '9565', '5662', '3164', '6358', '1531',
            '6442', '7375', '8540', '5069', '5443', '3044', '8894', '3661', '9436', '3150',
            '2970', '3015', '3505', '3803', '9651', '3160', '1517', '8400', '5333', '8632',
            '1438', '2798', '9277', '8403', '5943', '1942', '8671', '8265', '6064', '5277',
            '7086', '2913', '1119', '4203', '7610', '5097', '5731', '6341', '3079', '2299',
            '3697', '5806', '5765', '4264', '4185', '6711', '8813', '4509', '8147', '1572',
            '6668', '9188', '2982', '5963', '6518', '8735', '6167', '7588', '6033', '5321',
            '4799', '5901', '9158', '2708', '9164', '2720', '1793', '9949', '7156', '3096',
            '2725', '9743', '5971', '5429', '7981', '9055', '1660', '9756', '4119', '1630',
            '2288', '4659', '3777', '6637', '1162', '2618', '8774', '2432', '4067', '6331',
            '8528', '7325', '7406', '3643', '5655', '8876', '5505', '6811', '4300', '6789',
            '7802', '8305', '2754', '9707', '2451', '6620', '8581', '5669', '9249', '1758',
            '1981', '2251', '4287', '3462', '4298', '8628', '2639', '8835', '8708', '8473',
            '2857', '8552', '8497', '5106', '9904', '4734', '4221', '3600', '9353', '6285',
            '3314', '2865', '6244', '2205', '2199', '7556', '4468', '2614', '8804', '4191',
            '7424', '6990', '6961', '7850', '9696', '6233', '3558', '5324', '6060', '5756',
            '6850', '1472', '7491', '2500', '9402', '4782', '9346', '9655', '9849', '7984',
            '5654', '8827', '9066', '7697', '9805', '6142', '6125', '4112', '2971', '1198',
            '3872', '1742', '2418', '9867', '4893', '8180', '5299', '5966', '8829', '2805',
            '1038', '4202', '4231', '9083', '1075', '1373', '1616', '7018', '1384', '4675',
            '1536', '8303', '9321', '7849', '2533', '5362', '5269', '5900', '3888', '2749',
            '5973', '1406', '5103', '7449', '9549', '4355', '7705', '9043', '2539', '4405',
            '3924', '4310', '6536', '8511', '9451', '9765', '1511', '2890', '4168', '3735',
            '1307', '6656', '3102', '9622', '3407', '6865', '6156', '6251', '6849', '8028',
            '9494', '7584', '2993', '3522', '3412', '7476', '1852', '8519', '5543', '2602',
            '9061', '7378', '8790', '5826', '4940', '1858', '5410', '3480', '8550', '2450',
            '3054', '1874', '7114', '5775', '9118', '2848', '8982', '9031', '3460', '1837',
            '4078', '3248', '8029', '7003', '6643', '5263', '7462', '7042', '6740', '6227',
            '2752', '1009', '2701', '3542', '8301', '1475', '5935', '8099', '7742', '8036',
            '1222', '6377', '5316', '2370', '7523', '9399', '9825', '2863', '4863', '7077',
            '4292', '3532', '6753', '8954', '5682', '5526', '6086', '8283', '3084', '4341',
            '5696', '4665', '9945', '3387', '9078', '5365', '3758', '8276', '5099', '5952',
            '7132', '1004', '6317', '2896', '7429', '6551', '4126', '1455', '8752', '9914',
            '4487', '2682', '2395', '3973', '7008', '3475', '8816', '6121', '2351', '8456',
            '4283', '6426', '2531', '5894', '9273', '9775', '6902', '5969', '8837', '3337',
            '1984', '9749', '9680', '9901', '8405', '3421', '6923', '5479', '2221', '3193',
            '7739', '3045', '7719', '9012', '5481', '3016', '6321', '6554', '4984', '9755',
            '6481', '3864', '6772', '4561', '5790', '8347', '8421', '7927', '9611', '3204',
            '1507', '8465', '4954', '3033', '4184', '9752', '3944', '2659', '2087', '4774',
            '3406', '2662', '3330', '7358', '3257', '3677', '5469', '6603', '7162', '2648',
            '3223', '7467', '1820', '2270', '5844', '7607', '5568', '4359', '2154', '3353',
            '5066', '8713', '8010', '5210', '6212', '7682', '7836', '4930', '4222', '2668',
            '1967', '8425', '9609', '9912', '8647', '3046', '7372', '7062', '1073', '7791',
            '9600', '9943', '2322', '6969', '4669', '8569', '5358', '7691', '7822', '5107',
            '3429', '8558', '2156', '4258', '4532', '3357', '7962', '1121', '2789', '3738',
            '6088', '9875', '8864', '4695', '4596', '6344', '8621', '8585', '1065', '8556',
            '2906', '3416', '9488', '9688', '8285', '5537', '8808', '3635', '3355', '8663',
            '9394', '1354', '9599', '1429', '2595', '3415', '2724', '4936', '1026', '1924',
            '8069', '1239', '9505', '4339', '2775', '5705', '1634', '3177', '7544', '8360',
            '4137', '7439', '8930', '4646', '8931', '4392', '6110', '9712', '5093', '7261',
            '9699', '1627', '8300', '8358', '2779', '7015', '8130', '6993', '1718', '4729',
            '3987', '1355', '6014', '2849', '9009', '5508', '4224', '2017', '9922', '7292',
            '5452', '5145', '5957', '9165', '5919', '6206', '9397', '7313', '4240', '1991',
            '8375', '6555', '1530', '1779', '5143', '4582', '8772', '6677', '1988', '8940',
            '1865', '7430', '5364', '8892', '8463', '5827', '1847', '7400', '6730', '9629',
            '9939', '9992', '9506', '9812', '1467', '4554', '9459', '8859', '4020', '6685',
            '9138', '4546', '7017', '4960', '5570', '5039', '8198', '6053', '2110', '4854',
            '7185', '2967', '5411', '7780', '5893', '6384', '6209', '1561', '2855', '3749',
            '6832', '1957', '8645', '7473', '1534', '8173', '1251', '2062', '9561', '1640',
            '7561', '7842', '8535', '5249', '6901', '7838', '4357', '7609', '8239', '6836',
            '9387', '4743', '4239', '3479', '1682', '6693', '5800', '2480', '6503', '1188'
          ]);
          
          if (validPINs.has(newPin)) {
            onUnlock(newPin);
            setIsValidating(false);
            return;
          }
          
          // Validate PIN against Back4App database
          console.log('Validating PIN:', newPin, 'for subject:', subjectName);
          const { valid, pinData } = await pinService.validatePIN(newPin, subjectName);
          console.log('Validation result:', { valid, pinData });
          
          if (!valid) {
            // PIN is invalid or not found in database
            console.log('PIN validation failed');
            setInternalError(true);
            setPin('');
            setIsValidating(false);
            return;
          }
          
          // PIN is valid, check device binding
          const currentDeviceFingerprint = generateDeviceFingerprint();
          const storedBinding = localStorage.getItem(PIN_DEVICE_KEY);
          
          if (storedBinding) {
            const binding = JSON.parse(storedBinding);
            // Check if PIN matches and device matches
            if (binding.pin === newPin) {
              if (binding.deviceFingerprint === currentDeviceFingerprint) {
                // Same device, PIN matches - allow access
                onUnlock(newPin);
              } else {
                // PIN matches but different device - reject
                setDeviceMismatch(true);
                setInternalError(true);
                setPin('');
              }
            } else {
              // PIN doesn't match stored binding - update it
              localStorage.setItem(PIN_DEVICE_KEY, JSON.stringify({
                pin: newPin,
                deviceFingerprint: currentDeviceFingerprint,
                timestamp: Date.now()
              }));
              onUnlock(newPin);
            }
          } else {
            // First time using this PIN - bind to current device
            localStorage.setItem(PIN_DEVICE_KEY, JSON.stringify({
              pin: newPin,
              deviceFingerprint: currentDeviceFingerprint,
              timestamp: Date.now()
            }));
            onUnlock(newPin);
          }
        } catch (error) {
          console.error('Error validating PIN:', error);
          setInternalError(true);
          setPin('');
        } finally {
          setIsValidating(false);
        }
      }
    }
  };

  const handleClear = () => {
    setPin('');
    setInternalError(false);
    setDeviceMismatch(false);
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setInternalError(false);
      setDeviceMismatch(false);
    }
  };

  const handleResetDeviceBinding = () => {
    localStorage.removeItem(PIN_DEVICE_KEY);
    setPin('');
    setInternalError(false);
    setDeviceMismatch(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className={`bg-white/[0.08] backdrop-blur-xl border-white/[0.1] w-full max-w-sm shadow-2xl ${theme.glowColor}`}>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-lg ${theme.glowColor} animate-pulse`}>
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Enter PIN Code</h2>
            {subjectName && (
              <div className="flex items-center justify-center gap-2">
                <Sparkles className={`h-4 w-4 ${theme.iconColor}`} />
                <p className="text-white/50 text-sm">
                  Unlock {subjectName}
                </p>
              </div>
            )}
          </div>

          {/* PIN Display */}
          <div className="flex justify-center gap-3 mb-6">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                  error
                    ? 'border-red-500 bg-red-500/20 shadow-red-500/30 shadow-lg'
                    : pin[index]
                    ? `border-${theme.primary}-500 bg-${theme.primary}-500/20 ${theme.glowColor} shadow-lg`
                    : 'border-white/20 bg-white/5'
                }`}
              >
                {isValidating && pin.length === 4 ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white/70" />
                ) : pin[index] ? (
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${theme.gradient} shadow-lg`} />
                ) : null}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/30">
              <p className="text-red-400 text-center text-sm font-medium mb-2">
                {deviceMismatch 
                  ? 'PIN is bound to another device. Reset to use on this device.'
                  : 'Incorrect PIN. Access requires payment.'}
              </p>
              {deviceMismatch && (
                <button
                  onClick={handleResetDeviceBinding}
                  className="mt-2 text-xs text-red-300 hover:text-red-200 underline"
                >
                  Reset Device Binding
                </button>
              )}
              {!deviceMismatch && (
                <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <p className="text-amber-300 text-xs font-semibold mb-2 text-center">💳 Payment Required</p>
                  <div className="space-y-1 text-xs text-amber-200/80">
                    <p><strong>Amount:</strong> 125 ETB</p>
                    <p><strong>CBE Bank:</strong> 1000282751279</p>
                    <p><strong>Account Name:</strong> Alexander Getahun</p>
                    <p><strong>Telebirr:</strong> 0949835147 (Merry Getahun)</p>
                    <p className="mt-2"><strong>Contact:</strong> 0992010092 / 0914546032</p>
                    <p className="text-amber-200/60 italic">Available anytime</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <Button
                key={digit}
                onClick={() => handleDigitClick(digit)}
                variant="outline"
                className={`h-16 text-2xl font-semibold border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-${theme.primary}-500/50 transition-all duration-200`}
              >
                {digit}
              </Button>
            ))}
            <Button
              onClick={handleClear}
              variant="outline"
              className="h-16 border-white/20 text-white/60 bg-white/10 hover:bg-white/20 hover:border-red-500/50 transition-all duration-200"
            >
              Clear
            </Button>
            <Button
              onClick={() => handleDigitClick('0')}
              variant="outline"
              className="h-16 text-2xl font-semibold border-white/20 text-white bg-white/10 hover:bg-white/20 hover:border-${theme.primary}-500/50 transition-all duration-200"
            >
              0
            </Button>
            <Button
              onClick={handleDelete}
              variant="outline"
              className="h-16 border-white/20 text-white/60 bg-white/10 hover:bg-white/20 hover:border-red-500/50 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {onCancel && (
            <Button
              onClick={onCancel}
              variant="ghost"
              className="w-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              Cancel
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PINLock;
