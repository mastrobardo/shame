//import { ReactComponent as LightningColor } from '@assets/svg/lightning-color.svg';
import { ReactComponent as LightningShadow } from '@assets/svg/lightning-shadow.svg';
import { ReactComponent as LightningOutstroke } from '@assets/svg/lightning-outstroke.svg';
import { ReactComponent as Pattern } from '@assets/svg/dotted-pattern.svg';
import { LightningColor } from './lightningColor';

import './lightning.style.scss';

export const Lightning = (colorIndex: number) => {
  return (
        <div className="lightning">
            <LightningOutstroke className='lightning__outstroke'/>
            <LightningShadow className='lightning__shadow'/>
            <LightningColor colorIndex={colorIndex}/>
            <Pattern className='lightning__pattern'/>
        </div>
  );
};