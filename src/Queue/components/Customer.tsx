import CustomerCard from './styles/CustomerCard';
import ProfilePicture from './styles/ProfilePicture';
import Name from './styles/Name';
import Content from './styles/Content';
import EmailAddress from './styles/EmailAddress';
import Time from './styles/Time';

type CustomerProps = {
  name: string;
  emailAddress: string;
  expectedTime: string;
};

export const Customer = ({
  name,
  emailAddress,
  expectedTime,
}: CustomerProps) => {
  return (
    <CustomerCard>
      <ProfilePicture />
      <Content>
        <Name>{name}</Name>
        <EmailAddress>{emailAddress}</EmailAddress>
        <Time>Expected Time: {expectedTime}</Time>
      </Content>
    </CustomerCard>
  );
};
