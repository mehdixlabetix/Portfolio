/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingSection from '../components/LandingSection';
import '@testing-library/jest-dom';

test('renders the LandingSection component', () => {
    render(<LandingSection />);

    const avatar = screen.getByAltText('Mehdi Cherif');
    expect(avatar).toBeInTheDocument();

    const easterEgg = screen.getByText(/you found the easter egg/i);
    expect(easterEgg).toBeInTheDocument();
});