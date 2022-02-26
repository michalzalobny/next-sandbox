import { motion, Variants } from 'framer-motion';

export interface Props {
  variants: Variants;
  initial: string;
  animate: string;
}

export const Tick = (props: Props) => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 60.07" {...props}>
      <title>{'tick'}</title>
      <g data-name="Layer 2">
        <path
          style={{
            fill: '#b34f5f',
          }}
          d="M27.98 60.06 0 32.08l8.05-8.04 19.93 19.93L71.95 0 80 8.05 27.98 60.06z"
          data-name="Layer 1"
        />
      </g>
    </motion.svg>
  );
};
