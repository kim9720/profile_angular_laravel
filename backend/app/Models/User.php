<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles; // If using Spatie

class User extends Authenticatable
{
    use HasApiTokens, HasRoles, Notifiable;

    protected $fillable = ['name', 'email', 'password'];

    // One-to-One: Profile
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    // Many-to-Many: Skills (via technologies)
    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'user_technology')->withPivot('proficiency')->withTimestamps();
    }

    // One-to-Many: Projects
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    // One-to-Many: Experiences
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }
}
