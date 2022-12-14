import { TLightning } from '@interfaces/lightning.interface';
import { useState } from 'react';

const colorsArray: Array<Array<string>> = [
  ['FF4739', 'A04EF2'],
  ['61E9CE', '4E4EF2'],
  ['1EE46C', '0096C6'],
  ['5CDDC4', 'DACF40'],
  ['9C6DFF', '4545F0'],
];

export const LightningColor = ({ id, colorIndex }: TLightning) => {
  const [idx] = useState<number>(colorIndex || 0);

  const url = `url(#${id})`;

  return (
    <div key={id} className={'lightning__color'}>
      <svg width="177" height="228" viewBox="0 0 177 228" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M176.412 61.1571L-18.5415 354.269L68.3458 132.737L9.78191 142.672C3.96378 143.359 -0.000183105 140 0.616901 132.374L7.77613 7.50521C8.01885 3.27177 11.5226 -0.0368652 15.763 -0.0368652H95.065C100.277 -0.0368652 104.097 4.86683 102.822 9.92019L90.4578 58.9262L167.673 49.8063C173.931 49.0675 178.714 55.2813 176.412 61.1571Z"
         fill={url} />
        <defs>
          <linearGradient id={id} x1="-18.5415" y1="-0.0368652" x2="296.374" y2="190.218" gradientUnits="userSpaceOnUse">
            <stop stopColor={'#' + colorsArray[idx][0]} />
            <stop offset="1" stopColor={'#' + colorsArray[idx][1]} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

};