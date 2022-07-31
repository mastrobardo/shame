//import { ReactComponent as LightningColor } from '@assets/svg/lightning-color.svg';
import { ReactComponent as LightningShadow } from '@assets/svg/lightning-shadow.svg';
import { ReactComponent as LightningOutstroke } from '@assets/svg/lightning-outstroke.svg';
import { ReactComponent as Pattern } from '@assets/svg/dotted-pattern.svg';
import { TLightning } from '@interfaces/lightning.interface';
import { LightningColor } from './lightningColor';

import './lightning.style.scss';

export const Lightning = ({ colorIndex, id }: TLightning) => {

  return (
    <div className="lightning">
      <LightningOutstroke className='lightning__outstroke' />
      <LightningShadow className='lightning__shadow' />
      <LightningColor id={id} colorIndex={colorIndex} />
      <Pattern className='lightning__pattern' />
      {/*this is absolutely horredous, but they wont show up in the classic wa. leave here as TODO to investigatey*/}
      <svg className='lightning__sparks' width="162" height="186" viewBox="0 0 162 186" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M138.058 38.6999C137.812 38.9278 138.066 39.3269 138.377 39.2005L154.064 32.8196C154.448 32.5503 154.407 31.9685 153.988 31.7567L148.824 29.1438L154.674 23.704C154.915 23.4801 154.675 23.0873 154.366 23.1996L138.62 28.9262C138.3 29.2234 138.376 29.7444 138.765 29.9413L144.419 32.8062L138.058 38.6999Z"
          fill="#65F4D8" />
        <path
          d="M128.77 21.8507L137.986 2.10187C138.302 1.42494 138.969 0.980478 139.715 0.949379L160.751 0.072891C161.253 0.0519534 161.469 0.70256 161.053 0.985697L129.504 22.4754C129.084 22.7615 128.555 22.3112 128.77 21.8507Z"
          fill="#65F4D8" />
        <path
          d="M23.29 158.737L4.11642 165.128C3.42736 165.358 2.91698 165.943 2.78313 166.657L0.277662 180.019C0.188986 180.492 0.754097 180.805 1.10794 180.479L23.787 159.579C24.1831 159.214 23.8011 158.566 23.29 158.737Z"
          fill="#65F4D8" />
        <path
          d="M35.5754 162.792C35.7872 162.462 35.384 162.085 35.0695 162.318L19.1923 174.094C18.8363 174.51 19.052 175.156 19.5868 175.274L26.1843 176.726L21.153 184.576C20.9459 184.899 21.3318 185.274 21.6485 185.057L37.7825 174.004C38.0574 173.575 37.8203 173.008 37.3232 172.898L30.0993 171.304L35.5754 162.792Z"
          fill="#65F4D8" />
      </svg>
    </div>
  );
};