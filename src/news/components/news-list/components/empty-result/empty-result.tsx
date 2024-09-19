'use client';
import { Icon, Typography } from '@djeka07/ui';
import { Link } from '~/common/components/links';
import { useRouter } from '~/common/models/hooks';
import { root, icon } from './empty-result.css';

const EmptyResult = () => {
  const { push } = useRouter();

  return (
    <div className={root}>
      <Icon name="AlertTriangle" className={icon} size="xxxlarge" />
      <Typography fontStyle="italic" variant="body" align="center">
        Did not find any result. To clear the search, press <Link href="/">here</Link>
      </Typography>
    </div>
  );
};

export default EmptyResult;
