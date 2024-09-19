'use client';

import { Icon, PanelContainer, PanelContent, PanelSize, Typography } from '@djeka07/ui';
import { useState } from 'react';
import ThemeContainer from '~/common/components/themes/theme.container';
import { UserResponse } from '~/users/models/services/generated/user.generated';
import { icon, root } from './user-navigation-item.css';

type UserNavigationItemProps = {
  user: UserResponse;
};

const UserNavigationItem = ({ user }: UserNavigationItemProps) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);

  return (
    <>
      <button className={root} onClick={toggle}>
        <Icon name="User" className={icon} />
        <Typography as="span" color="link" size="xsmall">
          {user?.firstName}
        </Typography>
      </button>
      {show && (
        <PanelContainer
          afterPanelClosed={() => setShow(false)}
          panelElementProps={{ showCloseButton: true, closeOnEscape: true, maxWidth: PanelSize.Xxsmall }}
        >
          <PanelContent>
            <ThemeContainer label size="xlarge" />
          </PanelContent>
        </PanelContainer>
      )}
    </>
  );
};

export default UserNavigationItem;
