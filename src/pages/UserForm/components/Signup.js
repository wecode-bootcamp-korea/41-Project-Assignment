import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../UserForm.scss';

const Signup = () => {
  const navigate = useNavigate();

  const [userValue, setUserValue] = useState({
    id: '',
    pw: '',
    pw_check: '',
    name: '',
  });

  const isIdValid = userValue.id.includes('@');
  const isPasswordCorrect = userValue.pw && userValue.pw === userValue.pw_check;
  const isAllValid = isIdValid && isPasswordCorrect && userValue.name !== '';

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserValue(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitInput = e => {
    e.preventDefault();
    localStorage.setItem(
      'user',
      JSON.stringify({ id: userValue.id, pw: userValue.pw })
    );
    setUserValue({
      id: '',
      pw: '',
      pw_check: '',
      name: '',
    });
    navigate('/login');
  };

  return (
    <div className="userForm">
      <form className="userContainer" onSubmit={handleSubmitInput}>
        <span className="title">Signup</span>
        {INPUT_PLACEHOLDER.map(({ id, name, type }) => (
          <div key={id}>
            <input
              className="userInput"
              placeholder={name}
              name={id}
              onChange={handleInputChange}
              type={type}
            />
            {id === 'id' && (
              <p className="checkValid">
                {!isIdValid && '이메일을 입력해주세요'}
              </p>
            )}
            {id === 'pw_check' && (
              <p className="checkValid">
                {isPasswordCorrect
                  ? '비밀번호가 일치합니다.'
                  : '비밀번호가 일치하지 않습니다.'}
              </p>
            )}
          </div>
        ))}
        <button
          className={isAllValid ? 'formButton' : 'formButton disabled'}
          disabled={!isAllValid}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

const INPUT_PLACEHOLDER = [
  { id: 'id', name: '아이디' },
  { id: 'pw', name: '비밀번호', type: 'password' },
  { id: 'pw_check', name: '비밀번호 확인', type: 'password' },
  { id: 'name', name: '이름' },
];