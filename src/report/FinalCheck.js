import React from 'react';
import { connect } from 'react-redux';
import './FinalCheck.css'; // 引入樣式檔案

const FinalCheck = ({ t1, t2, t3, t4, t5, t6 }) => {
  return (
    <div className="final-check">
      <p><strong>案件種類：</strong>{t1}</p>
      <p><strong>動物種類：</strong>{t2}</p>
      <p><strong>結紮狀況：</strong>{t3}</p>
      <p><strong>受傷狀況：</strong>{t4}</p>
      <p><strong>其他補充：</strong>{t5}</p>
      <p><strong>確認上傳照片：</strong></p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  t1: state.Type,
  t2: state.animaltype,
  t3: state.ligation,
  t4: state.hurts,
  t5: state.additional,
  t6: state.Publish,
});

export default connect(mapStateToProps)(FinalCheck);
