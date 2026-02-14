import CodeBlock from "../components/codeBlock";

export default function Slide7() {
  return (
    <div>
      <h2 className="text-5xl font-black text-emerald-400 mb-6">
        Real World Example
      </h2>

      <CodeBlock>{`const userSchema = new Schema({
  email: String,
  password: String,
  isDeleted: { type: Boolean, default: false }
});

// Document middleware
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Query middleware
userSchema.pre(/^find/, function(next) {
  this.where({ isDeleted: false });
  next();
});`}</CodeBlock>
    </div>
  );
}
