/* eslint-disable @typescript-eslint/no-explicit-any */

export {}; // 必须保留
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $_: any;
    $copy: any;
    $merge: any;
    $dayjs: any;
    $fmtd: any;
    storeData: any;
    pageLoading: boolean;
    saveLoading: boolean;
  }
}
