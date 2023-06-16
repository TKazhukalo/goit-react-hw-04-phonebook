import styled from '@emotion/styled';
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
   align-items: center;
`

export const Input = styled.input`
  width: 260px;
  padding: 12px 18px;
  margin-bottom: 16px;
  border-radius: 4px;

 border:1px solid rgba(0, 0, 0, 0.3);
 outline:none;
 background-color: Field;
 color: #234e49;
&:hover{
 box-shadow: 0 0 0 1px green, 0 0 13px #333;
}

`
export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
`