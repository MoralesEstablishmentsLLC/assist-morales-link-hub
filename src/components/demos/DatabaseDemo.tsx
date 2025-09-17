import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Database, Plus, Trash2, Search } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const DatabaseDemo = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'editor' }
  ]);
  
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user' });
  const [searchTerm, setSearchTerm] = useState('');

  const addUser = () => {
    if (!newUser.name || !newUser.email) {
      toast.error('Please fill in all fields');
      return;
    }
    
    const user: User = {
      id: Date.now(),
      ...newUser
    };
    
    setUsers([...users, user]);
    setNewUser({ name: '', email: '', role: 'user' });
    toast.success('User added successfully!');
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
    toast.success('User deleted successfully!');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-500/10 text-red-600';
      case 'editor': return 'bg-blue-500/10 text-blue-600';
      default: return 'bg-green-500/10 text-green-600';
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Database Operations Demo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add User Form */}
        <div className="bg-card p-4 rounded-lg border space-y-4">
          <h3 className="font-semibold">Add New User</h3>
          <div className="grid md:grid-cols-4 gap-2">
            <Input
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <Input
              placeholder="Email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <select
              className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
            <Button onClick={addUser} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Users Table */}
        <div className="space-y-2">
          <h3 className="font-semibold">Users Database ({filteredUsers.length} records)</h3>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-muted p-3 grid grid-cols-4 gap-4 font-medium text-sm">
              <div>Name</div>
              <div>Email</div>
              <div>Role</div>
              <div>Actions</div>
            </div>
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-3 grid grid-cols-4 gap-4 items-center border-t">
                <div className="font-medium">{user.name}</div>
                <div className="text-muted-foreground">{user.email}</div>
                <div>
                  <Badge className={getRoleBadgeColor(user.role)}>
                    {user.role}
                  </Badge>
                </div>
                <div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteUser(user.id)}
                    className="h-8"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatabaseDemo;