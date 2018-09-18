import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import { setSearch } from '../../actions'
import { mockMemberData, mockTitle } from '../../utils/mockData/mockMemberData'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        title={mockTitle}
      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should return an object with ')
  //Setup
  const mockState = {
    members:{}
  }
  const expected = {}

  const mappedProps = mapStateToProps(mockState)

  expect(mappedProps).toEqual(expected)
})