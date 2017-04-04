import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Home from 'components/home'

describe('components/home', () => {
    describe(Home.name, () => {

        const render = () => {
            const wrapper = shallow(<Home />)
            return { wrapper, instance: wrapper.instance() }
        }

        it('should render default home', () => {
            const { wrapper } = render()
            const h1 = wrapper.find('h1')
            expect(h1.text()).to.equal('StarterKit')
            wrapper.unmount()
        })
    })
})
