<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Technology extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['category_id', 'name', 'description'];

    // Belongs to Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Many-to-Many: Users (skills)
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_technology')->withPivot('proficiency')->withTimestamps();
    }

    // Many-to-Many: Projects
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_technology')->withTimestamps();
    }
}
