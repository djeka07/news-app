type Props = { q?: string; category?: string };

const generateTitle = ({ q, category }: Props, isDescription: boolean = false) => {
  const base = `${isDescription ? 'Read about todays' : 'Todays'} top news`;
  if (!!q && !!category) {
    return `${base} in ${q} and ${category}`;
  }

  if (!!q || !!category) {
    return `${base} in ${q || category}`;
  }

  return base;
};

export default generateTitle;
