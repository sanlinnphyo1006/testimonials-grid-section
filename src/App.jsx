import Grid from "./layout/Grid";

import Container from "./components/Container";
import Testimonial from "./components/Testimonial";

import testimonials from "./data.json";

const App = () => {
  return (
    <Container>
      <Grid>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </Grid>
    </Container>
  );
};

export default App;
