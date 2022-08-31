import { readFileAsText } from '@/utils';
import { textToEnvironment, textToVitalSigns } from '@/mappers';

const $environmentRoot = document.querySelector<HTMLDivElement>('div#environment');
const $environmentInput = document.querySelector<HTMLInputElement>('input#environment-file');
const $vitalSignInput = document.querySelector<HTMLInputElement>('input#vital-sign-file');

$environmentInput?.addEventListener('change', async (event) => {
  if(event.target) {
      const files = (event.target as HTMLInputElement).files;
      if(files) {
          const text = await readFileAsText(files[0])
          const environment = textToEnvironment(text);
          console.log(environment);
      }
  }
});

$vitalSignInput?.addEventListener('change', async (event) => {
  if(event.target) {
      const files = (event.target as HTMLInputElement).files;
      if(files) {
          const text = await readFileAsText(files[0])
          const vitalSigns = textToVitalSigns(text);
          console.log(vitalSigns);
      }
  }
});
