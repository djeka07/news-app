'use client';

import { Button, Icon, PanelContainer, PanelContent, PanelPosition, PanelSize } from '@djeka07/ui';
import { useState } from 'react';
import { useAuth } from '~/auth/models/hooks';
import { button, buttonInner, buttonWrapper } from './edit-profile.css';
import { EditProfileFormContainer } from '../edit-profile-form';

type EditProfileProps = {
  apiKey?: string;
  language?: string;
};

const EditProfile = ({ apiKey, language }: EditProfileProps) => {
  const [{ user }] = useAuth();
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className={buttonWrapper}>
        <Button
          title="Edit settings"
          align="center"
          justify="center"
          innerClass={buttonInner}
          className={button}
          onClick={() => setShowForm(true)}
          round
        >
          <Icon name="Edit" color="input" />
        </Button>
      </div>
      {showForm && (
        <PanelContainer
          afterPanelClosed={() => setShowForm(false)}
          panelElementProps={{ panelPosition: PanelPosition.Right, showCloseButton: true, maxWidth: PanelSize.Small }}
        >
          <PanelContent title={`Edit ${user?.firstName || ''} ${user?.lastName || ''}`}>
            <EditProfileFormContainer initialForm={{ apiKey, language }} onClose={() => setShowForm(false)} />
          </PanelContent>
        </PanelContainer>
      )}
    </>
  );
};

export default EditProfile;
