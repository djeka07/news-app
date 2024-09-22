'use client';
import { Button, DropDown, TextInput } from '@djeka07/ui';
import { useActionState } from 'react';
import { ActionReturn } from '~/common/models/types/actions';
import { buttonWrapper, root } from './profile-form.css';
import languages from '~/users/models/constants/language';

export type ProfileFormData = {
  apiKey?: string;
  language?: string;
};

export type ProfileFormProps = {
  initialForm: ProfileFormData;
  action: (_: unknown, form: FormData) => Promise<ActionReturn>;
  onClose?: () => void;
};

const ProfileForm = ({ action, initialForm, onClose }: ProfileFormProps) => {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form className={root} action={formAction}>
      <TextInput type="text" name="apiKey" label="Api key" placeholder="Enter api key" value={initialForm?.apiKey} />

      <DropDown
        label="All news language"
        name="language"
        items={languages.map((lang) => ({
          name: lang.name,
          value: lang.value,
          isSelected: lang.value === initialForm?.language,
        }))}
      />
      <div className={buttonWrapper}>
        <Button isLoading={pending} title="Update" type="submit" success>
          Update
        </Button>
        {onClose && (
          <Button title="Close" error onClick={onClose}>
            Close
          </Button>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
