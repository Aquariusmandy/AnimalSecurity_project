import React from 'react';
import { connect } from 'react-redux';
import './FinalCheck.css'; // 引入樣式檔案

const MapCheck = ({ t1, t2, t3, t4, t5, t6 }) => {
  return (
    <div className="final-check">
      <p><strong>確認回報地點：</strong></p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  t1: state.Type,
  t2: state.animaltype,
  t3: state.ligation,
  t4: state.hurts,
  t5: state.additional,
  t6: state.Publish
});

export default connect(mapStateToProps)(MapCheck);
