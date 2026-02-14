import CodeBlock from "../components/codeBlock";
import HighlightBox from "../components/highLightBox";

export default function Slide5() {
  return (
    <div>
      <h2 className="text-5xl font-black text-emerald-400 mb-6">
        ⚠️ Common Pitfall
      </h2>

      <HighlightBox variant="danger">
        Document middleware does NOT run on Model static methods!
      </HighlightBox>

      <CodeBlock>{`// ❌ Will NOT hash password
await User.findOneAndUpdate(
  { email: 'user@example.com' },
  { password: 'newPass' }
);

// ✓ Correct way
const user = await User.findOne({...});
user.password = 'newPass';
await user.save();`}</CodeBlock>
    </div>
  );
}
