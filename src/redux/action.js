export const setFiles = (files) => {
  return {
    type: 'SET_FILES',
    payload: files,
  };
};

export const setStats = (stats) => {
  return {
    type: 'SET_STATS',
    payload: stats,
  };
};

export const setTitle = (title) => {
  return {
    type: 'SET_TITLE',
    payload: title,
  };
};
