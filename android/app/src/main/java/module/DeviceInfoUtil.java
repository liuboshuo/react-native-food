package module;

import android.telephony.TelephonyManager;

import android.content.Context;

public class DeviceInfoUtil {
    private Context context;

    public DeviceInfoUtil(Context ctx) {
        this.context = ctx;
    }
    
    // 获取设备品牌
    public String getBrand() {
        return android.os.Build.BRAND;
    }

    // 获取设备型号
    public String getModel() {
        return android.os.Build.MODEL;
    }
    
    public String getImei() {
        TelephonyManager telephonyManager = (TelephonyManager) context
            .getSystemService(Context.TELEPHONY_SERVICE);
        return telephonyManager.getDeviceId();
    }
    
}
