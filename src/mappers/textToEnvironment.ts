import { EnvironmentInfo } from "@/models";
import { isPosition } from "@/validators";
import { textToPosition } from "./textToPosition";

export function textToEnvironment(text: string): EnvironmentInfo {
    const environment: any = {}

    const lines = text.toString().split('\r\n');
    for(const line of lines) {
        let values = line.split(' ');
        const key = values[0]

        values = values.slice(1);
        if(values.length === 1) {
            const value = values[0]
            environment[key] = isPosition(value) ? textToPosition(value) : Number(value)
        } else {
            environment[key] = []
            for(const value of values) {
                environment[key].push(isPosition(value) ? textToPosition(value) : Number(value));
            }
        }
    }

    return environment;
}