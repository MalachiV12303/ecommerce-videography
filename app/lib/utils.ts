import { Camera, Lense } from "./db/schema";

export const formatCurrency = (amount: number) => {
  return (amount * 1).toLocaleString('en-US', {
    currency: 'USD',
  });
};

export const filtermap = new Map([
  ['cameratypes', ['DSLR', 'Mirrorless']],
  ['camerabrands', ['Canon', 'Nikon', 'Sony', 'Panasonic']],

  ['lensetypes', ['Telephoto Zoom', 'Standard Prime']],
  ['lensebrands', ['Canon', 'Nikon', 'Sony', 'Panasonic', 'Sigma', 'Tamron']],

  ['aerialtypes', ['Indoor', 'Outdoor', 'Both']],
  ['aerialbrands', ['DJI', 'Snaptain', 'Contixo']],

  ['resolutions', ['1080', '2160', '6144']],
  ['shutterspeeds', ['1/4000 to 30 sec', '1/8000 to 30 sec']],
  ['megapixels', ['20.9', '24.1', '24.2']],
  ['focallengths', ['0-10','10-17', '18-25', '26-49', '50-69', '70-99', '100-169', '170-499']],
  ['apertures', ['f/1','f/1.2', 'f/1.4', 'f/1.6', 'f/1.8', 'f/2', 'f/2.5', 'f/2.8', 'f/3.5','f/4', 'f/4.5', 'f/5', 'f/5.6', 'f/6.3']],

]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isCamera(obj: any): obj is Camera {
  return obj && typeof obj === "object" && "megapixels" in obj
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isLense(obj: any): obj is Lense {
  return obj && typeof obj === "object" && "minfl" in obj
};

