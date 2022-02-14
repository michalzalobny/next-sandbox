interface ModHorizontal {
  value: number;
  limit: number;
  elRef: React.RefObject<HTMLDivElement>;
}

export const modHorizontal = (props: ModHorizontal): number => {
  const { elRef, limit, value } = props;
  if (!elRef.current) return 0;
  if (value <= 0) {
    const offset = Math.floor(-value / limit) * limit;
    const elPosition = elRef.current.offsetLeft + elRef.current.clientWidth;
    if (value + offset < -elPosition) return value + offset + limit;
    return value + offset;
  } else {
    const offset = Math.ceil(value / limit) * limit;
    const elPosition = elRef.current.offsetLeft + elRef.current.clientWidth;
    if (value - offset < -elPosition) return value - offset + limit;
    return value - offset;
  }
};
