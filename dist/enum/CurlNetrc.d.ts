/**
 * Copyright (c) . All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * To be used with the `NETRC` option
 *
 * `CURL_NETRC_OPTIONAL` becomes `CurlNetrc.Optional`
 *
 * @public
 */
export declare enum CurlNetrc {
    /**
     * The .netrc will never be read.
     * This is the default
     */
    Ignored = 0,
    /**
     * A user:password in the URL will be preferred to one in the .netrc
     */
    Optional = 1,
    /**
     * A user:password in the URL will be ignored.
     * Unless one is set programmatically, the .netrc
     * will be queried.
     */
    Required = 2
}
//# sourceMappingURL=CurlNetrc.d.ts.map