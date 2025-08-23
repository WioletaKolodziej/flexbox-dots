export default function InfoField() {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase">Flexbox attributes Info</h2>
      <br></br>
      <h3 className="text-xl font-bold">Flex Container (parent) properties</h3>
      <p>
        <strong>display: flex</strong> → turns an element into a flex container,
        enabling flex context for its children.
      </p>
      <p>
        <strong>flex-direction</strong> → defines the main axis direction: row,
        row-reverse, column, column-reverse.
      </p>
      <p>
        <strong>flex-wrap</strong> → controls wrapping of flex items: nowrap,
        wrap, wrap-reverse.
      </p>
      <p>
        <strong>flex-flow</strong> → shorthand for flex-direction + flex-wrap.
      </p>
      <p>
        <strong>justify-content</strong> → aligns items along the main axis:
        flex-start, flex-end, center, space-between, space-around, space-evenly.
      </p>
      <p>
        <strong>align-items</strong> → aligns items along the cross axis:
        stretch, flex-start, flex-end, center, baseline.
      </p>
      <p>
        <strong>align-content</strong> → aligns multiple lines along the cross
        axis (works when wrapping): flex-start, flex-end, center, space-between,
        space-around, stretch.
      </p>
      <br></br>
      <h3 className="text-xl font-bold">Flex Items (children) properties</h3>
      <p>
        <strong>order</strong> → changes the visual order of an item (default:
        0).
      </p>
      <p>
        <strong>flex-grow</strong> → defines how much an item will grow relative
        to others (default: 0).
      </p>
      <p>
        <strong>flex-shrink</strong> → defines how much an item will shrink
        relative to others (default: 1).
      </p>
      <p>
        <strong>flex-basis</strong> → initial main size of an item before
        growing/shrinking (default: auto).
      </p>
      <p>
        <strong>flex</strong> → shorthand for flex-grow, flex-shrink, and
        flex-basis.
      </p>
      <p>
        <strong>align-self</strong> → overrides align-items for a single item:
        auto, flex-start, flex-end, center, baseline, stretch.
      </p>
    </div>
  );
}
