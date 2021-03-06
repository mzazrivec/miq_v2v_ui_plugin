import React from 'react';
import { shallow } from 'enzyme';
import { PlanWizardScheduleStep } from '../PlanWizardScheduleStep';

describe('Plan wizard schedule step', () => {
  it('renders with a warning if migrating an OSP plan immediately', () => {
    const component = shallow(
      <PlanWizardScheduleStep targetProvider="openstack" migration_plan_choice_radio="migration_plan_now" />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders with no warning if migrating an OSP plan later', () => {
    const component = shallow(
      <PlanWizardScheduleStep targetProvider="openstack" migration_plan_choice_radio="migration_plan_later" />
    );
    expect(component).toMatchSnapshot();
  });
});
