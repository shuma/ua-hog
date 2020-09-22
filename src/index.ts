type BrowserResult = { name: string, version: string };
type DeviceResult = { model: string, type: string, vendor: string };
type EngineResult = { name: string, version: string };
type OSResult = { name: string, version: string };
type CpuResult = { architecture: string };

export function UaHog(ua: string): BrowserResult | DeviceResult | EngineResult | OSResult | CpuResult  | null {

}
