/**
 * @see https://developers.google.com/tag-manager/quickstart
 */

import GoogleTagManagerNoScript from './GoogleTagManagerNoScript';
import GoogleTagManagerScript from './GoogleTagManagerScript';

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_GTM_ID;

export default function GoogleTagManager() {
  if (!gtmId) {
    return null;
  }

  return (
    <>
      <GoogleTagManagerScript gtmId={gtmId} />
      <GoogleTagManagerNoScript gtmId={gtmId} />
    </>
  );
}
