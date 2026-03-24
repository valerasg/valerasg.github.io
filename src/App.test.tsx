import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText("Sergio's Projects")).toBeInTheDocument();
  });

  it('renders the featured project section', () => {
    render(<App />);
    const featuredProjects = screen.getByTestId('featured-projects');
    expect(featuredProjects).toBeInTheDocument();
    
    // Check if Esteganografia is present in featured
    expect(featuredProjects.textContent).toContain('Esteganografia');
    expect(featuredProjects.textContent).toContain('A web-based tool for hiding secret messages');
  });

  it('renders the secondary projects section with NeoJackpot and Vlogs', () => {
    render(<App />);
    const allProjects = screen.getByTestId('all-projects');
    expect(allProjects).toBeInTheDocument();

    // Verify NeoJackpot and Vlogs list
    expect(allProjects.textContent).toContain('NeoJackpot');
    expect(allProjects.textContent).toContain('Vlogs');
  });

  it('renders background elements for design aesthetic', () => {
    render(<App />);
    const bgElements = screen.getByTestId('background-elements');
    expect(bgElements).toBeInTheDocument();
    
    // Because it contains 3 'orbs' inside
    expect(bgElements.children.length).toBe(3);
  });
});
