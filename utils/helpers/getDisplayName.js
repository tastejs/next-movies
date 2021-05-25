

const getDisplayName = wrappedComponent => {
  return wrappedComponent.displayName || wrappedComponent.name || 'Component';
};
