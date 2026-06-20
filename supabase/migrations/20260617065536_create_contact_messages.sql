CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_messages" ON contact_messages
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "select_contact_messages" ON contact_messages
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "update_contact_messages" ON contact_messages
  FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "delete_contact_messages" ON contact_messages
  FOR DELETE TO authenticated
  USING (true);
