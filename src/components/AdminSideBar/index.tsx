import * as S from './style';
import * as I from 'images';

const AdminSideBar = () => {
  return (
    <S.SideContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.LogoIcon size={true} color="white" />
        </S.Logo>
        <S.Title>Stack Kowwlege</S.Title>
      </S.LogoContainer>
    </S.SideContainer>
  );
};

export default AdminSideBar;
