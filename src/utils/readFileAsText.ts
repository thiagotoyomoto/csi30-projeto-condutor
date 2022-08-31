export async function readFileAsText(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
            if(event.target?.result) {
                const data = event.target.result.toString();
                resolve(data);
            } else {
                reject();
            }
        }
        fileReader.readAsText(file);
    });
}