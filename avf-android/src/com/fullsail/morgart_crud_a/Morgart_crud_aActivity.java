package com.fullsail.morgart_crud_a;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class Morgart_crud_aActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/src/index.html");
    }
}