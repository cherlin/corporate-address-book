import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { nameCapitalizer, addressCapitalizer } from '../utils';

const ContactDetailsPageWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin: 10px 0;
  padding: 22px 25px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const Segments = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  border-radius: 100px;
  margin-right: 25px;
  border: 4px solid #00A0DC;
  @media (max-width: 768px) {
    margin-right: 0
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  margin: 5px 0 18px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PersonData = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  @media (max-width: 768px) {
    margin: 0 0 25px;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: 500;
  margin-right: 10px;
  width: 70px;
`;

const InfoItem = styled.p`
  margin: 0 0 7px;
  display: flex;
`;

const StyledLink = styled.a`
  color: inherit;
`;

const BackButton = styled.button`
  width: 100%;
  padding: 10px 8px;
  color: white;
  background: #0077B5;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const details = (fetching, currentContact) => {
  if (fetching) return (<p>Loading!</p>);
  if (!currentContact.length) return (<p>No contact with that id!</p>);
  const {
    picture,
    name,
    email,
    phone,
    cell,
    location,
  } = currentContact[0];
  return (
    <Segments>
      <ProfilePicture>
        <Avatar src={picture.large} alt={name.first} />
      </ProfilePicture>
      <ProfileInfo>
        <Title>{nameCapitalizer(name.first)} {nameCapitalizer(name.last)}</Title>
        <PersonData>
          <BasicInfo>
            <InfoItem>
              <Label>Email</Label> <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
            </InfoItem>
            <InfoItem>
              <Label>Phone</Label> {phone}
            </InfoItem>
            <InfoItem>
              <Label>Cell</Label> {cell}
            </InfoItem>
          </BasicInfo>
          <AddressInfo>
            <InfoItem>
              <Label>Street</Label> {addressCapitalizer(location.street)}
            </InfoItem>
            <InfoItem>
              <Label>City</Label> {addressCapitalizer(location.city)}
            </InfoItem>
            <InfoItem>
              <Label>State</Label> {location.postcode}
            </InfoItem>
          </AddressInfo>
        </PersonData>
      </ProfileInfo>
    </Segments>
  );
};

function ContactDetailsPage({ contact, fetchingContacts, history }) {
  return (
    <ContactDetailsPageWrapper>
      <Card>
        { details(fetchingContacts, contact) }
      </Card>
      <BackButton onClick={history.goBack}>&#8592; Go Back</BackButton>
    </ContactDetailsPageWrapper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // Get only the contacts matching the id in the url.
  contact: state.contacts.filter(contact => contact.login.uuid === ownProps.match.params.id),
  fetchingContacts: state.fetchingContacts,
});

ContactDetailsPage.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  fetchingContacts: PropTypes.bool.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(ContactDetailsPage);
