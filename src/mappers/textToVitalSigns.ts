import { VitalSignInfo } from "@/models";

export function textToVitalSigns(data: string): VitalSignInfo[] {
    const vitalSigns: VitalSignInfo[] = [];

    const lines = data.toString().split('\r\n');
    for(const line of lines) {
        let values = line.split(' ').map(Number);
        const [ i, s1, s2, s3, s4, s5, g, y ] = values;
        vitalSigns.push({
            i, s1, s2, s3, s4, s5, g, y
        } as VitalSignInfo);
    }

    return vitalSigns;
}