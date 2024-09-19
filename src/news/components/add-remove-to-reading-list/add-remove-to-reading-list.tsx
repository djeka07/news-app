import { Icon, Spinner } from '@djeka07/ui';
import { root, icon, wrapperSpinner, spinner, actionClass, motionClass } from './add-remove-to-reading-list.css';
import { css } from '@djeka07/utils';
import { AnimatePresence, motion } from 'framer-motion';

export type State = { isInList: boolean; isUpdating: boolean; action?: 'added' | 'removed'; error?: string };

type AddRemoveToReadingListProps = {
  className?: string;
  onClick: () => Promise<void>;
  state: State;
};

const AddRemoveToReadingList = ({ onClick, className, state }: AddRemoveToReadingListProps) => (
  <button className={css(root, className)} onClick={onClick}>
    {state.isUpdating && <Spinner wrapperClass={wrapperSpinner()} className={spinner} size="xsmall" />}
    <AnimatePresence>
      {!!state.action && (
        <motion.div className={motionClass} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
          <Icon
            className={actionClass({ type: state.action })}
            name={state.action === 'added' ? 'Plus' : 'Close'}
            color={state.action === 'added' ? 'success-light' : 'error-light'}
            size="xxsmall"
          />
        </motion.div>
      )}
    </AnimatePresence>
    <Icon
      name={state.isInList ? 'BookmarkFilled' : 'Bookmark'}
      size="large"
      color="input"
      className={icon({ isInList: state.isInList })}
    />
  </button>
);

export default AddRemoveToReadingList;
