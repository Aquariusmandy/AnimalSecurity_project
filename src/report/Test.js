import React from 'react';
import { connect } from 'react-redux';

const Test = ({ t1, t2, t3, t4, t5, t6 }) => {
  return <div>{t1}<br />{t2}<br />{t3}<br />{t4}<br />{t5}<br />{t6}<br /></div>;
};

const mapStateToProps = (state) => ({
  t1: state.Type, // 从Redux的store中获取Type变量的值
  t2: state.animaltype,
  t3: state.ligation,
  t4: state.hurts,
  t5: state.additional,
  t6: state.Publish

});

export default connect(mapStateToProps)(Test);