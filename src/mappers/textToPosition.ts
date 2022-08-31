import { Position } from '@/models/Position';

export function textToPosition(value: string): Position {
    const values = value.split(',');
    return {
        x: Number(values[0]),
        y: Number(values[1])
    }
}