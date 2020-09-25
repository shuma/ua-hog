type BrowserResult = { name: string, version: string };
type DeviceResult = { model: string, type: string, vendor: string };
type EngineResult = { name: string, version: string };
type OSResult = { name: string, version: string };

export function parseUserAgent(ua: string): BrowserResult | DeviceResult | EngineResult | OSResult | null {

}

export function getUserAgent(): string {
  if(typeof navigator === 'object' && 'userAgent' in navigator){
    return navigator.userAgent;
  }
  // Node
  if(typeof process === "object" && 'version' in process){
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch
      })`;
  }
  return "<environment undetectable>";
}

export function isAppleDevice(ua: string): boolean{}
export function isAndroidDevice(ua: string): boolean{}
export function isMobile(ua: string): boolean{}
export function isDesktop(ua: string): boolean{}
