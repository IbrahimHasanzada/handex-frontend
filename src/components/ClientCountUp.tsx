'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type ClientCountUpProps = {
  end: number;
  prefix?: string;
};

const ClientCountUp: React.FC<ClientCountUpProps> = ({ end, prefix = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {startCount ? <CountUp end={end} duration={2} separator="," prefix={prefix} /> : '0'}
    </div>
  );
};

export default ClientCountUp;
