package module;


import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.util.Log;
import android.widget.Toast;


import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.rn_foods.R;

import javax.annotation.Nullable;


/**
 * Created by ls-mac on 2017/5/15.
 */

public class NativeAppModule extends ReactContextBaseJavaModule implements ActivityEventListener{

    private static final String DEBUG_TAG = "ReactNative_Java";
    private ProgressDialog busyIndicator;

    public NativeAppModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);

    }
    @Override
    public String getName() {
        return "NativeAppModules";
    }

    @ReactMethod
    public void showHud(String text) {
        Log.i(DEBUG_TAG, "showBusyIndicator");
        Log.i(DEBUG_TAG, text);
        if ( null == getCurrentActivity()) {
            return;
        }
        synchronized(this) {
            if ( null != busyIndicator ) {
                try {
                    busyIndicator.dismiss();
                } catch(Exception ex) {
                } finally {
                    busyIndicator = null;
                }
            }
            busyIndicator = new ProgressDialog(getCurrentActivity());
            busyIndicator.setProgressStyle(ProgressDialog.STYLE_SPINNER);
            busyIndicator.setCancelable(true);
            busyIndicator.setMessage(text);
            busyIndicator.show();
        }
    }
    @ReactMethod
    public void hideHud() {
        Log.i(DEBUG_TAG, "hideBusyIndicator");
        Log.i(DEBUG_TAG, "busyIndicator=" + busyIndicator);
        synchronized(this) {
            if (null != busyIndicator) {
                Log.i(DEBUG_TAG, "busyIndicator.isShowing()=" + busyIndicator.isShowing());
                if ( busyIndicator.isShowing()) {
                    try {
                        busyIndicator.dismiss();
                    } catch(Exception ex) {
                        Log.e(DEBUG_TAG, "exception when hide busy indicator.", ex);
                    }
                }
                busyIndicator = null;
            }
        }
    }
    @ReactMethod
    public void showHint(String text) {
        Toast.makeText(getCurrentActivity(), text,
                Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void getAppInfos(Promise promise){
        WritableMap map = new WritableNativeMap();
        DeviceInfoUtil dev = new DeviceInfoUtil(getReactApplicationContext());

        map.putString("brand", dev.getBrand());
        map.putString("model", dev.getModel());
        map.putString("imei", dev.getImei());

        Resources resources = getCurrentActivity().getResources();
        map.putString("server_host", resources.getString(R.string.server_host));
        map.putString("appKey",resources.getString(R.string.appKey));
        map.putString("version", getVersion());
        String packageName = getCurrentActivity().getPackageName();
        map.putString("appId",packageName);
        promise.resolve(map);
    }

    private String getVersion() {
        try {
            PackageManager manager = this.getReactApplicationContext().
                    getPackageManager();
            PackageInfo info = manager.getPackageInfo(this.getReactApplicationContext().getPackageName(), 0);
            return info.versionName;
        } catch (Exception e) {
            return "0.0.0";
        }
    }

        @Override
    public void onNewIntent(Intent intent){

    }
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        getAppInfos(new Promise() {
            @Override
            public void resolve(@Nullable Object value) {

            }

            @Override
            public void reject(String code, String message) {

            }

            @Override
            public void reject(String code, Throwable e) {

            }

            @Override
            public void reject(String code, String message, Throwable e) {

            }

            @Override
            public void reject(String message) {

            }

            @Override
            public void reject(Throwable reason) {

            }
        });
    }
}
